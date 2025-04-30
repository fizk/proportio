const createCssVariables = (tokens) => {
  const CssTokensArray = Object.entries(tokens).reduce((previous, [_, categoryValue]) => {
    return [
      ...previous,
      ...Object.entries(categoryValue).reduce((previous, [variableName, variableValue]) => {
        return [
          ...previous,
          [variableName, variableValue.$type === 'color' ? variableValue.$value.hex: variableValue.$value]
        ]
      }, [])
    ]
  }, []);

  CssTokensArray.forEach(([name, value]) => {
    document.documentElement.style.setProperty(
      `--${name}`, value
    );
  });

  const formattedCssTokens = CssTokensArray.map(([name, value]) => {
    return `--${name}: ${value};`
  });

  return formattedCssTokens.join('\n');
};

export default createCssVariables;
