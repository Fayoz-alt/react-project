import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";
import { useNavigate } from "react-router";

function LogOutConfirm({ open, setOpenLogOut }) {

    const handleDelete = () => {
        localStorage.clear()
        setOpenLogOut(false)
        window.location.reload();
    }

    return <Dialog
        open={open}
        onClose={() => setOpenLogOut(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
        fullWidth
        maxWidth='xs'
        sx={{
            '& .MuiDialog-paper': {
                borderRadius: '30px',
            },
        }}
    >
        <Stack spacing={2} sx={{ padding: `30px 8px 8px 8px` }}>
            <Stack sx={{ alignItems: `center` }}>
                <img src="https://images.vexels.com/media/users/3/340644/isolated/preview/e582116e90ff33f47a38ba20aaf82ecc-red-x-in-a-circle.png?w=360" alt="" style={{ maxWidth: `170px`, width: `100%` }} />
            </Stack>
            <DialogTitle id="delete-dialog-title">
                {"Confirm Permanent Log Out!"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="delete-dialog-description">
                    Are you sure you want to delete your account? This action cannot be
                    undone and the data will be permanently lost.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ padding: '16px' }}>
                <Button onClick={() => setOpenLogOut(false)} color="primary" variant="outlined">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="error" variant="contained" autoFocus>
                    Log Out
                </Button>
            </DialogActions>
        </Stack>
    </Dialog>
}
export default LogOutConfirm