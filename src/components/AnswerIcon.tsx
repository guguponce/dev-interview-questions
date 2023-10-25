export default function AnswerIcon(answer: boolean, color: string) {
  return (
    <>
      {answer ? (
        <svg width="1rem" height="1rem" viewBox="0 -0.5 17 17">
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M3.432,6.189 C3.824,5.798 4.455,5.798 4.847,6.189 L6.968,8.31 L13.147,2.131 C13.531,1.747 14.157,1.753 14.548,2.144 L16.67,4.266 C17.06,4.657 17.066,5.284 16.684,5.666 L7.662,14.687 C7.278,15.07 6.651,15.064 6.261,14.673 L1.311,9.723 C0.92,9.333 0.92,8.7 1.311,8.31 L3.432,6.189 Z"
                fill={color}
              ></path>
            </g>
          </g>
        </svg>
      ) : (
        <svg width="1rem" height="1rem" viewBox="0 0 17 17">
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M12.566,8 L15.611,4.956 C16.031,4.535 16.031,3.853 15.611,3.434 L12.566,0.389 C12.146,-0.031 11.464,-0.031 11.043,0.389 L7.999,3.433 L4.955,0.389 C4.534,-0.031 3.852,-0.031 3.432,0.389 L0.388,3.434 C-0.034,3.854 -0.034,4.536 0.387,4.956 L3.431,8 L0.387,11.044 C-0.034,11.465 -0.034,12.147 0.388,12.567 L3.432,15.611 C3.852,16.032 4.534,16.032 4.955,15.611 L7.999,12.567 L11.043,15.611 C11.464,16.032 12.146,16.032 12.566,15.611 L15.611,12.567 C16.031,12.146 16.031,11.464 15.611,11.044 L12.566,8 L12.566,8 Z"
                fill={color}
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      )}
    </>
  );
}
