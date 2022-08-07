interface IUsuario {
    nome: string,
    email: StaticRangeInit
}

class CreateUserService {
    execute({nome, email}: IUsuario){
        const data = [];

        data.push({nome, email});

        return data;
    }
}

export { CreateUserService }