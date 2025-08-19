export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 512 256"
    //   {...props}
    // >
    //   <path
    //     fill="currentColor"
    //     d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
    //   />
    // </svg>
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M100 0C127.614 0 150 22.3858 150 50C150 77.6142 127.614 100 100 100H0V0H100ZM57 35C48.7157 35 42 41.7157 42 50C42 58.2843 48.7157 65 57 65H92C100.284 65 107 58.2843 107 50C107 41.7157 100.284 35 92 35H57Z"
        fill="#F9F7F3"
      />
      <path d="M0 100H150V150H0V100Z" fill="#F9F7F3" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
