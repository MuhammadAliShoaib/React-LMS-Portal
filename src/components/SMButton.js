import Button from "@mui/material/Button";

function SMButton(props) {
  const { label, onClick, disabled, startIcon, endIcon,className } = props;
  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={onClick}
        className={className}
        variant="contained"
      >
        {label}
      </Button>
    </>
  );
}
export default SMButton;
