/* Recursive tree validator for ScreenNode structures. */

const VALID_SPLIT_TYPES = ['v', 'h', null];

/* Validate a single node's own fields (non-recursive). */
const validateNodeFields = (node, path) => {
  if (typeof node !== 'object' || node === null || Array.isArray(node)) {
    return `${path}: must be a non-null object`;
  }

  if (typeof node.id !== 'string' || node.id.trim() === '') {
    return `${path}.id: must be a non-empty string`;
  }

  if (typeof node.color !== 'string' || node.color.trim() === '') {
    return `${path}.color: must be a non-empty string`;
  }

  if (!VALID_SPLIT_TYPES.includes(node.splitType)) {
    return `${path}.splitType: must be 'v', 'h', or null`;
  }

  if (typeof node.ratio !== 'number' || node.ratio < 0 || node.ratio > 100) {
    return `${path}.ratio: must be a number between 0 and 100`;
  }

  return null; // valid
};

/* Recursively validate the entire tree structure. */
export const validateLayoutTree = (node, path = 'structure') => {
  // Validate this node's own fields
  const fieldError = validateNodeFields(node, path);
  if (fieldError) return fieldError;

  // Validate children relationship
  const { children, splitType } = node;

  // Leaf node: children must be null, splitType must be null
  if (children === null || children === undefined) {
    if (splitType !== null) {
      return `${path}: leaf node cannot have a splitType`;
    }
    return null; // valid leaf
  }

  // Split node: must have splitType and exactly 2 children
  if (!Array.isArray(children) || children.length !== 2) {
    return `${path}.children: must be null or an array of exactly 2 nodes`;
  }

  if (splitType === null) {
    return `${path}: node with children must have a splitType ('v' or 'h')`;
  }

  // Recurse into children
  const leftError = validateLayoutTree(children[0], `${path}.children[0]`);
  if (leftError) return leftError;

  const rightError = validateLayoutTree(children[1], `${path}.children[1]`);
  if (rightError) return rightError;

  return null; // valid
};
