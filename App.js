    import { StyleSheet, Text, View, Alert} from 'react-native';
    import params from './src/params';
    import react,{ Component } from 'react';
    import {createMinedBoard,cloneBoard, openField, hasExplosion, wonGame, showMines, invertFlag, flagsUsed} from './src/Logics';
    import MinedField from './src/components/MinedField';
    import Header from './src/components/Header';
    import LevelSelection from './src/screens/LevelSelection';
    export default class App extends Component {

      constructor(props){
        super(props)
        this.state = this.createState();
      }

      minesAmount = ()=> {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        return Math.ceil(cols * rows * params.dificultLevel);
      }

      createState = ()=>{
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
          board: createMinedBoard(rows, cols, this.minesAmount()),
          won: false,
          lost: false,
          showLevelSelection: false,
        }
      }

        openField = (row, column) =>{
        console.log('entrou aqui')
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hasExplosion(board)
        const won = wonGame(board)

        if (lost) {
          showMines(board)
          Alert.alert("lost the game, try again")
        }

        if (won) {
          Alert.alert("win the game, congratulations")
        }

        this.setState({board, lost, won})
      }

      onSelectField = (row, column) =>{
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)
        if (won) {
          Alert.alert("win the game, congratulations")
        }
        this.setState({board, won})

      }

      onLevelSelect = level =>{
        params.dificultLevel = level
        this.setState(this.createState())
      }

      render() {
        return (
          <View style={styles.container}>
            <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelect={this.onLevelSelect}
             onCancel={()=> this.setState({showLevelSelection: false})} >
             </LevelSelection>
           <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} onNewGame={() => 
            this.setState(this.createState()) } onFlagPress={()=> this.setState({showLevelSelection: true}) } > </Header>
            <View style={styles.board}>
              <MinedField board={this.state.board} openField={this.openField} onSelectField={this.onSelectField} />
            </View>
          </View>
        );  
      }      
    }

    const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'flex-end',
      },
      board:{
        alignItems: 'center',
        backgroundColor: '#AAA',
      },  
    })

