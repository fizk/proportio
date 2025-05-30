import React from 'react';
import ComponentElement from '../elements/ComponentElement';

const demoComponents = [
  {
    name: `component-comfortable (default)-medium (default)`,
    value: (
      <ComponentElement
        key={`component-comfortable (default)-medium (default)`}
        componentMinHeight={24}
        paddingX={16}
        paddingY={16}
        typeSize={16}
        iconSize={16}
        iconPadding={0}
        gapSize={5}
        componentLineHeight={1.2}
        spec={false}
        showComponentIcon={true}
        showComponentText={true}
        radius={4}
        icon={null}
        iconStroke={1}
        baseScaleUnit={'px'}
        baseSize={16}
      />
    ),
  },
];

export default demoComponents;
