# biome-no-nested-ternary-lint-issue

This repository demonstrates an issue with Biome's `noNestedTernary` rule. You can reproduce the issue by running lint & format commands in each project folder.

## Reproduction Steps

### Biome

```
cd biome
pnpm i
pnpm check
```

### ESLint

```
cd eslint
pnpm i
pnpm format
pnpm lint
```

## Results

- Biome fails to detect nested ternary operators (case1) when formatting is applied with parentheses.
- ESLint correctly detects nested ternary operators even when parentheses are added in the same situation.

## Related Documentation

- [biome/noNestedTernary](https://biomejs.dev/linter/rules/no-nested-ternary/)
- [eslint/no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
