import React from 'react';
import {View, Text} from 'react-native';

export default class recebidos extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            loading: false,
            dados: [],
            url: 'http://api.smileb.com.br/api/TesteDesenvolvimento/DadosRecebidos'
        };
        this.funcao = this.funcao.bind(this);
    }
    funcao(){ //Atualizar número de curtidas
        this.setState({
            num_curtida: '3',
        });
    }

    componentDidMount() {
        this.getDados();
    }

    getDados = () => {
        this.setState ({ loading: true })
        fetch(this.state.url)
        .then( res => res.json())
        .then( res => {
            this.setState({
                dados: res.results,
                url: res.next,
                loading: false
            })
        });
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <FlatList 
                        data={ this.state.dados}
                        renderItem={
                            ({item}) => 
                            <Text> 
                                { item.name } 
                                { item.telefone}
                                { item.endereco }
                                { item.num_curtida }
                            </Text>
                        }
                    />
                </View>
            </View>
        );
    }
}