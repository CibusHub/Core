import { User } from '../models/user';

export interface UserRepository {
  getUserById(id: string): User;
  getUserByEmail(email: string): User;
  createUser(user: User): void;
  updateUser(user: User): void;
}
