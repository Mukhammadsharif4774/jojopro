import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import JojoHeader from '../components/JojoHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams[0]}</Text>
        <Text style={styles.teamsSecond}>{teams[1]}</Text>
      </View>

      <Text style={styles.matchTime}>{time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <JojoHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Premier League', '05.01 18:30', [
          'Manchester United',
          'Liverpool',
        ])}

        {renderBroadcast('Serie A', '12.01 20:45', ['Juventus', 'AC Milan'])}

        {renderBroadcast('Champions League', '18.01 21:00', [
          'Paris Saint-Germain',
          'Bayern Munich',
        ])}

        {renderBroadcast('Super Bowl', '05.02 19:00', [
          'New England Patriots',
          'Los Angeles Rams',
        ])}

        {renderBroadcast('Wimbledon', '12.02 14:30', [
          'Roger Federer',
          'Rafael Nadal',
        ])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.main,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    borderColor: 'rgba(19, 55, 141, 0.3)',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingLeft: 10,
    verticalAlign: 'middle',
  },
  leagueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '65%',
  },
  matchTime: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'right',
    width: '100%',
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
  },
  teams: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.medium,
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 5,
    height: 45,
  },
  teamsSecond: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.medium,
    fontSize: 17,
    color: COLORS.white,
    marginLeft: 5,
    height: 45,
    borderBottomRightRadius: 12,
  },
});
