export function cond(condition: boolean, prop: any, or?: any) {
  return condition ? prop : or ?? ({} as any);
}
