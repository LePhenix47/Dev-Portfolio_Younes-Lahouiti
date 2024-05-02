type NoiseFilterProps = {
  imageId: string;
};

/**
 * Represents a noise filter SVG component used for applying a pixel noise effect with displacement to an image.
 *
 * See ["Recreating an epic hover effect" by Hyperplexed](https://youtu.be/z1wZp4jV4cQ?si=HjWgG1PYpR8KNsQC&t=152) for a demonstration.
 *
 * @param {string} imageId - The ID of the image to which the noise filter effect is applied.
 * @returns {JSX.Element} A JSX element representing the NoiseFilter component.
 *
 * @example
 * // Example usage:
 * const imageId = "myImageId";
 *
 * <NoiseFilter imageId={imageId} />
 * ...
 * <img src={...} id={imageId}/>
 */
export default function NoiseFilter({
  imageId,
}: NoiseFilterProps): JSX.Element {
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
              begin={`${imageId}.mouseenter`}
            />
          </feTurbulence>
          {/*
              Doc explaining how displacement maps work:
              https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap
              */}
          <feDisplacementMap
            //Image we want to apply the effect to
            in="SourceGraphic"
            //Name of the result effect itself
            in2="static-effect"
            scale={1}
          >
            <animate
              attributeName="scale"
              values="0;40;30;0"
              dur="1s"
              repeatCount="2"
              begin={`${imageId}.mouseenter`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
