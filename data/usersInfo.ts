import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export const usersInfo  = [
        {
            "id": 1,
            "username": "standard_user",
            "password": process.env.USER_PASSWORD
        },
        {
            "id": 2,
            "username": "locked_out_user",
            "password": process.env.USER_PASSWORD
        },
        {
            "id": 3,
            "username": "problem_user",
            "password": process.env.USER_PASSWORD
        },
        {
            "id": 4,
            "username": "performance_glitch_user",
            "password": process.env.USER_PASSWORD
        },
        {
            "id": 5,
            "username": "error_user",
            "password": process.env.USER_PASSWORD
        },
        {
            "id": 6,
            "username": "visual_user",
            "password": process.env.USER_PASSWORD
        }
    ];
