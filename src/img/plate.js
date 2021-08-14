export default function PlateSVG(props) {
  return (
    <svg width="100%" height="100%">
      <circle
        cx="65"
        cy="65"
        r={50 * props.factor}
        stroke="black"
        stroke-width="3"
        fill={props.fill || "red"}
      />
      <circle
        cx="65"
        cy="65"
        r="10"
        stroke="black"
        stroke-width="3"
        fill="var(--colorTwo)"
      />
      <text x="55" y="40" font-size={20}>
        {props.weight}
      </text>
    </svg>
  );
}
