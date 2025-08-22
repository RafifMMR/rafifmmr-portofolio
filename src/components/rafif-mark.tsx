export function RafifMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 160H10V10H110C137.614 10 160 32.3858 160 60C160 87.6142 137.614 110 110 110H160V160ZM67 45C58.7157 45 52 51.7157 52 60C52 68.2843 58.7157 75 67 75H102C110.284 75 117 68.2843 117 60C117 51.7157 110.284 45 102 45H67Z"
        fill="#FF6461"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
