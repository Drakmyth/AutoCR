// Shared separately because achievements imports logic, and both need note kinds.
// Keeping this in either module would misplace ownership or introduce an import cycle.
export const NoteKind = Object.freeze({
  VALUE: "value",
  POINTER: "pointer",
  ARRAY: "array",
});
