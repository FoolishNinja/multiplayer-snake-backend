import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column, Unique, BaseEntity } from "typeorm";

@Entity()
@Unique(['email', 'username'])
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    constructor(
        username: string,
        email: string,
        password: string,
        id?: number
    ) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}