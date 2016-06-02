{
	_id: ObjectId("523b1153a2aa6a3233a913f8"), // to check later
	userID: {type: Number, required: true },
	name: {type: String, required: true, default: '' },
	hashed_password: { type: String, required: true, default: '' },
	lastLogin: { type: Date, required: true },
}