export default function PlateSVG(props) {
  return (
    <svg width="100%" height="100%">
      <circle
        cx={65 * props.factor}
        cy={65 * props.factor}
        r={50 * props.factor}
        stroke="black"
        strokeWidth="3"
        fill={props.fill || "red"}
      />
      <circle
        cx={65 * props.factor}
        cy={65 * props.factor}
        r="10"
        stroke="black"
        strokeWidth="3"
        fill="var(--colorTwo)"
      />
      <text x="55" y="40" fontSize={20}>
        {props.weight}
      </text>
    </svg>
  );
}
