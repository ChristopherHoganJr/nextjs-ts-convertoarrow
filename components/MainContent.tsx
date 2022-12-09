import React, { useState, useRef, useEffect, ReactEventHandler } from "react";

const MainContent = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const alertRef = React.useRef(null);
  const popupRef = React.useRef(null);
  const hoverRef = React.useRef(null);
  const pToRef = React.useRef(null);
  const colorValRef = React.useRef(null);

  const [hovering, setHovering] = useState(Boolean);

  const changeBackground = (refName: any, colorName: string): void => {
    refName.current.style.backgroundColor = `${colorName}`;
  };

  const hoverThis = (): void => {
    setHovering(!hovering);
  };

  const popupText = (): void => {
    alert(popupRef?.current.value);
  };

  return (
    <div
      className='py-5'
      style={{ backgroundColor: hovering ? "red" : "transparent" }}>
      <h1>My Boring Website</h1>
      <p
        ref={paraRef}
        id='paragraph'
        style={{ backgroundColor: "transparent" }}>
        This website is boring, with very little CSS. However, we really just
        care about the javascript. For example, if you click
        <button
          ref={buttonRef}
          id='button'
          className='py-2 px-1 mx-1 bg-slate-400 rounded-sm'
          onClick={() => changeBackground(paraRef, "blue")}>
          this button
        </button>
        , the background of this paragraph tag will change to blue.
      </p>
      <p>
        We also have a
        <button
          ref={alertRef}
          id='alert'
          className='py-2 px-1 mx-1 bg-slate-400 rounded-sm'
          onClick={popupText}>
          alert
        </button>
        button that will grab the text from the input below and show it in a
        popup.
      </p>
      <div>
        <input
          type='text'
          ref={popupRef}
          id='popup-input'
          className='p-2 border-2 w-full'
        />
      </div>
      <p>
        We just like random interactivity in the site, including a fun effect if
        you hover over
        <span
          ref={hoverRef}
          id='hover-this'
          onMouseEnter={(e) => hoverThis()}
          onMouseLeave={(e) => hoverThis()}>
          <b>this.</b>
        </span>
      </p>
      <p
        ref={pToRef}
        id='pToChange'
        onClick={() =>
          changeBackground(pToRef, String(colorValRef?.current.value))
        }>
        Another task: This should be another feature. I want to click anywhere
        in this paragraph tag and I want to be able to change the background
        color to whatever is in this input:
        <input
          type='text'
          ref={colorValRef}
          id='color-value'
          className='p-2 border-2 w-full'
        />
        .
      </p>
    </div>
  );
};

export default MainContent;
