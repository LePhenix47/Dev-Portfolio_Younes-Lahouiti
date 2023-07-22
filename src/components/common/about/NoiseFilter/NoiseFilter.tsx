export default function NoiseFilter() {
  return (
    <svg className="svg-filter hide">
      <defs>
        <filter id="pixel-noise">
          {/* 
              Doc explaining how the turbulence filter SVG work:
              https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence
              */}
          <feTurbulence
            baseFrequency="0.5,0.5"
            numOctaves={1}
            seed={0}
            type="fractalNoise"
            result="static-effect"
          >
            <animate
              attributeName="seed"
              values="0;100;0"
              dur="1s"
              repeatCount="2"
              begin="image.mouseenter"
            />
          </feTurbulence>
          {/*
              Doc explaining how displacement maps work:
              https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap               */}
          <feDisplacementMap
            //Image we want to apply the effect to
            in={`SourceGraphic`}
            //Name of the result effect itself
            in2="static-effect"
            scale={1}
          >
            <animate
              attributeName="scale"
              values="0;40;30;0"
              dur="1s"
              repeatCount="2"
              begin="image.mouseenter"
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
