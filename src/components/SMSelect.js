import { Box, MenuItem, TextField } from "@mui/material";

function SMSelect(props) {

    const { options, label, defaultValue, helperText, onChange, className } = props

    return (

        <Box

            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                className={className}
                id="outlined-select-currency"
                select
                label={label}
                defaultValue={defaultValue}
                helperText={helperText}

            >
                {options.map((option) => (
                    <MenuItem key={option.value} onClick={option.setField(option.value)} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}

               
            </TextField>
        </Box>
    )

}

export default SMSelect;