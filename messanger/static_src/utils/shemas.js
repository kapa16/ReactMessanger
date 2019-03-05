import { schema } from 'normalizr';

export const chats = new schema.Entity('chats');
export const chatsSchema = [chats];

export const profileSchema = new schema.Entity('profile');
