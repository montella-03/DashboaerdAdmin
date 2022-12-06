import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


function SparkLine({id,height,width,color,type,currentColor,data}) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 1 }}
      dataSource={data}
      tooltipSettings={{
        visible: true,
        // format:`${x} :data ${y}`,
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
      xName="x"
      yName="y"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine