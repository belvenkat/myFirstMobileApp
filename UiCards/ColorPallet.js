import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CollorPallet() {
  return (
    <View style={styles.container}>

      <View style={styles.firstContainer}>

        <View style={styles.firstContainer_firstChild}>

        </View>

        <View style={styles.firstContainer_secondChild}>

        </View>

        <View style={styles.firstContainer_thirdChild}>

        </View>


      </View>

      <View style={styles.secondContainer} >
        <View style={styles.secondContainer_firstChild}>

        </View>
        
        <View style={styles.secondContainer_secondChild}>

        </View>
      </View>

      <View style={styles.thirdContainer} >
        <View style={styles.thirdContainer_firstChild}>

        </View>
        <View style={styles.thirdContainer_secondChild}>

        </View>
      </View>

      <View style={styles.fourthContainer} >
        <View style={styles.fourthContainer_firstChild}>
          <View style={styles.fourthContainer_firstChild_firstChild}></View>
          <View style={styles.fourthContainer_firstChild_secondChild}></View>
          <View style={styles.fourthContainer_firstChild_thirdChild}></View>
          <View style={styles.fourthContainer_firstChild_fourthChild}></View>
        </View>
        <View style={styles.fourthContainer_secondChild}>

        </View>
      </View>

    </View>





  );
}

const styles = StyleSheet.create({
  container: {

  },

  firstContainer: {
    height: 200,
    flexDirection: 'row'
  },

  firstContainer_firstChild: {
    flex: 1,
    backgroundColor: 'violet'
  },

  firstContainer_secondChild: {
    flex: 1,
    backgroundColor: 'orange'
  },

  firstContainer_thirdChild: {
    flex: 1,
    backgroundColor: 'blue'
  },


  secondContainer: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    height: 200
  },
  secondContainer_firstChild: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: 200
  },
  secondContainer_secondChild: {
    backgroundColor: 'yellow',
    flex: 2
  },

  thirdContainer: {
    flexDirection: 'row',
    height: 200
  },
  thirdContainer_firstChild: {
    backgroundColor: 'black',
    flex: 2
  },
  thirdContainer_secondChild: {
    backgroundColor: 'violet',
    flex: 1
  },


  fourthContainer: {
    flexDirection: 'row',
    height: 200
  },
  fourthContainer_firstChild: {
    backgroundColor: 'gray',
    flex: 1
  },
  fourthContainer_secondChild: {
    backgroundColor: 'green',
    flex: 2
  },

  fourthContainer_firstChild_firstChild: {
    backgroundColor: 'red',
    flex: 1
  },
  fourthContainer_firstChild_secondChild: {
    backgroundColor: 'yellow',
    flex: 1
  },
  fourthContainer_firstChild_thirdChild: {
    backgroundColor: 'gray',
    flex: 1
  },
  fourthContainer_firstChild_fourthChild: {
    backgroundColor: 'black',
    flex: 1
  }
});
