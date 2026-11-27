// Separate module so achievements and logic can share note kinds without circular imports.
export const NoteKind = Object.freeze({
  VALUE: "value",
  POINTER: "pointer",
  ARRAY: "array",
});
