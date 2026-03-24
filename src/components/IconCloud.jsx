import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { useEffect, useMemo, useState } from "react";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.06, -0.06],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.025,
    minSpeed: 0.01,
  },
};

const renderCustomIcon = (icon, theme) => {
  return renderSimpleIcon({
    icon,
    bgHex: "#080510",
    fallbackHex: "#ffffff",
    minContrastRatio: theme === "dark" ? 2 : 1.2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((i) =>
      renderCustomIcon(i, "dark"),
    );
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
