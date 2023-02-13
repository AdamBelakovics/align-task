export function Result({ stepsArray }) {
  return `[${stepsArray.map((step) => `{${step.x}, ${step.y}}`).join(",")}]`;
}
