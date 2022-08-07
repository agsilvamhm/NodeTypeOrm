import { Connection, createConnection, createConnections, getConnection} from 'typeorm';

export default async(): Promise<Connection> => {
    const defaultOption = await getConnection();
    
    return createConnection(
        Object.assign(defaultOption)
    )
    
}