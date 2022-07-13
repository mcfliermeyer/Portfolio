type Props = { className?: string; onClick(): void };
const FlipArrow = (props: Props) => {
  return (
    <div className={props.className} onClick={() => props.onClick()}>
      <svg
        viewBox="0 -2 23.803 22.849"
        width="50"
        height="50"
        fill="none"
      >
        <path
          d="M 1.207 6.839 C 11.331 18.867 15.398 18.134 14.153 9.206 C 14.056 8.51 14.289 1.733 13.775 1.483 C 11.646 0.448 11.167 5.765 10.88 6.7780000000000005 C 10.697 7.422 11.361 5.557 11.654 4.982 C 12.025 4.254 12.54 1.268 14.129 1.71 C 15.792 2.174 19.075 5.788 20.063 7.2940000000000005"
          stroke="#34CACE"
          strokeWidth="1.5"
          transform="matrix(0.99, -0.8, 0.8, 0.99, -2.996215, 8.076933)"
        ></path>
      </svg>
    </div>
  );
};
export default FlipArrow;
