import React from "react";
import { Grid, CircularProgress, Typography, Box } from "@mui/material";

export const Loading = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ width: "100%", height: "98vh" }}
        >
            <Box sx={{ textAlign: "center" }}>
                <CircularProgress
                    size={60}
                    thickness={4}
                    sx={{
                        color: "#00E676",
                        mb: 2,
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        color: "#666",
                        fontWeight: 300,
                        "@keyframes pulse": {
                            "0%": { opacity: 0.6 },
                            "50%": { opacity: 1 },
                            "100%": { opacity: 0.6 },
                        },
                        animation: "pulse 2s ease-in-out infinite",
                    }}
                >
                    LOADING...
                </Typography>
            </Box>
        </Grid>
    );
};

