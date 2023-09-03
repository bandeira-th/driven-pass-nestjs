import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';



@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}

  async create(createUserDto: CreateUserDto) {
    const isUser = await this.userRepository.findOneByEmail(createUserDto.email)
    if (isUser) throw new ConflictException({message: "this email is already in use."});
    const newUser = await this.userRepository.create(createUserDto);
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
