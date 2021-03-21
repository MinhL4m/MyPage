import React from "react";
import { ResponsiveBar } from "@nivo/bar";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  const color = "hsla(344, 70%, 29%, 1)";
  const data = [
    {
      name: "JavaScript",
      JS: 85,
      percentage: "85%",
      JSColor: color,
    },
    {
      name: "TypeScript",
      TS: 80,
      percentage: "80%",
      TSColor: color,
    },
    {
      name: "Java",
      Java: 70,
      percentage: "70%",
      JavaColor: color,
    },
    {
      name: "React",
      React: 80,
      percentage: "80%",
      ReactColor: color,
    },
    {
      name: "Swift",
      Swift: 70,
      percentage: "70%",
      SwiftColor: color,
    },
    {
      name: "CSS",
      CSS: 90,
      percentage: "90%",
      CSSColor: color,
    },
    {
      name: "Flutter",
      Flutter: 70,
      percentage: "70%",
      FlutterColor: color,
    },
  ];

  const keys = ["JS", "TS", "Java", "React", "Swift", "CSS", "Flutter"];

  return (
    <section className="home-skills" style={{ height: "90vh" }}>
      <h1 className="section-header">Skills</h1>
      <div className="row" style={{ height: "80vh" }}>
        <ResponsiveBar
          data={data}
          keys={keys}
          indexBy="name"
          margin={{ top: 0, right: 70, bottom: 50, left: 70 }}
          padding={0.45}
          maxValue={100}
          colors={color}
          layout="horizontal"
          defs={[
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          label={(d: any) => {
            return `${d.data.percentage}`;
          }}
          labelSkipWidth={18}
          labelSkipHeight={12}
          labelTextColor="#ffffff"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
    </section>
  );
};
