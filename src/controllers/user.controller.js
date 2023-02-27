const usuarios = [];

class User {
	constructor(username, avatar) {
		this.username = username;		
		this.avatar = avatar;
	}
}

export function signUp(req,res) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }
    const newUser = new User(username, avatar);
    usuarios.push(newUser);
  
    res.status(200).send('OK deu tudo certo');
}

export {usuarios};