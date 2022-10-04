import React from 'react'
import { Stack, Rating } from '@mui/material'

export const MuiRating = ({ rating }) => {
	return (
		<Stack spacing={2}>
			<Rating size="small" readOnly value={rating} />
		</Stack>
	)
}
