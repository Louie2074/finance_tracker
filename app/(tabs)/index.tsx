import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedText } from '../../components/ThemedText';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#A1CEDC' }}
      headerImage={
        <View style={styles.headerContainer}>
          <ThemedText type="title" style={styles.welcomeText}>Welcome Back Louis</ThemedText>
          <ThemedText style={styles.dateText}>August 12, 2025</ThemedText>
          <View style={styles.bellContainer}>
            <Ionicons name="notifications" size={22} color="white" />
          </View>
        </View>
      }
    >
      <View style={styles.networthRectangle}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          // onPress={() => navigation.navigate('NextScreen')}
        >
          <ThemedText style={styles.netWorthText}>Net Worth</ThemedText>
          <Ionicons name="chevron-forward" size={25} color="white" style={{ marginLeft: 8, marginTop: 10 }} />
        </TouchableOpacity>

        <ThemedText style={styles.netWorthNumber}>$100,000</ThemedText>

        <View style={styles.assetsLiabilitiesRow}>
          <View style={styles.itemRow}>
            <Ionicons name="arrow-up" size={20} color="green" style={{ marginRight: 6 }} />
            <ThemedText style={styles.assetsText}>Assets</ThemedText>
          </View>

          <View style={styles.itemRow}>
            <ThemedText style={styles.liabilitiesText}>Debt</ThemedText>
            <Ionicons name="arrow-down" size={20} color="red" style={{ marginLeft: 6 }} />
          </View>
        </View>
        <View style={styles.alNumrow}>
          <View style={styles.alitemRow}>
            <ThemedText style={styles.assetsText}>$150,000</ThemedText>
          </View>

          <View style={styles.alitemRow}>
            <ThemedText style={styles.liabilitiesText}>$50,000</ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.budgetRectangle}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          // onPress={() => navigation.navigate('NextScreen')}
        >
          <ThemedText style={styles.budgetText}>Budget Remaining</ThemedText>
          <Ionicons name="chevron-forward" size={25} color="#1D3D47" style={{ marginLeft: 8, marginTop: 10 }} />
        </TouchableOpacity>

        <ThemedText style={styles.budgetNumber}>$2500</ThemedText>

        <ThemedText style={styles.moneyLeftText}>Money Left to Spend</ThemedText>
        <ThemedText style={styles.progressText}>$2500 out of $5000</ThemedText>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '50%' }]} />
        </View>
      </View>

      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        // onPress={() => navigation.navigate('NextScreen')}
      >
        <ThemedText style={styles.expensesText}>Expenses</ThemedText>
        <Ionicons name="chevron-forward" size={25} color="#1D3D47" style={{ marginLeft: 8, marginTop: 10}} />
      </TouchableOpacity>

      <View style={styles.expensesLine} />

      
      <View style={styles.rentRow}>
        <Ionicons name="home" size={24} color="#1D3D47" style={{ marginRight: 10 }} />

        <ThemedText style={[styles.rentText, { flex: 1 }]}>Rent</ThemedText>

        <ThemedText style={[styles.rentAmount, { width: 80, textAlign: 'right' }]}>$1500</ThemedText>
      </View>

      {/* Second row: empty space for icon, progress bar, and $0 left aligned with icon */}
      <View style={[styles.rentRow, { marginTop: -5 }]}>
        <View style={{ width: 34, marginRight: 0 }} /> {/* spacer for icon width */}

        <View style={{ flex: 1 }}>
          <View style={styles.rentProgressBar}>
            <View style={[styles.rentProgressFill, { width: '100%' }]} />
          </View>
        </View>

        <ThemedText style={[styles.rentLeft, { width: 80, textAlign: 'right' }]}>$0 left</ThemedText>
      </View>

      {/* Seperate rent from groceries*/}
      <View style={styles.expensesLine} />


      <View style={styles.rentRow}>
        <Ionicons name="cart" size={24} color="#1D3D47" style={{ marginRight: 10 }} />

        <ThemedText style={[styles.rentText, { flex: 1 }]}>Groceries</ThemedText>

        <ThemedText style={[styles.rentAmount, { width: 80, textAlign: 'right' }]}>$500</ThemedText>
      </View>
      

    
      <View style={[styles.rentRow, { marginTop: -5 }]}>
        <View style={{ width: 34, marginRight: 0 }} /> {/* spacer for icon width */}

        <View style={{ flex: 1 }}>
          <View style={styles.rentProgressBar}>
            <View style={[styles.rentProgressFill, { width: '30%' }]} />
          </View>
        </View>

        <ThemedText style={[styles.rentLeft, { width: 80, textAlign: 'right' }]}>$350 left</ThemedText>
      </View>
      <View style={styles.expensesLine} />
      <View style={styles.rentRow}>
        <Ionicons name="restaurant" size={24} color="#1D3D47" style={{ marginRight: 10 }} />

        <ThemedText style={[styles.rentText, { flex: 1 }]}>Eating Out</ThemedText>

        <ThemedText style={[styles.rentAmount, { width: 80, textAlign: 'right' }]}>$250</ThemedText>
      </View>
      

    {/* Seperate Eating out from groceries*/}
      <View style={[styles.rentRow, { marginTop: -5 }]}>
        <View style={{ width: 34, marginRight: 0 }} /> {/* spacer for icon width */}

        <View style={{ flex: 1 }}>
          <View style={styles.rentProgressBar}>
            <View style={[styles.rentProgressFill, { width: '40%' }]} />
          </View>
        </View>

        <ThemedText style={[styles.rentLeft, { width: 80, textAlign: 'right' }]}>$100 left</ThemedText>
      </View>
      <View style={styles.expensesLine} />

    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerContainer: {
    alignItems: 'flex-start',
    paddingTop: 49,
    paddingLeft: 20,
  },
  welcomeText: {
    fontSize: 22,
    maxWidth: '65%',
    color: '#1D3D47',
  },
  bellContainer: {
    position: 'absolute',
    top: 52,
    right: 20,
    backgroundColor: '#1D3D47',
    borderRadius: 12,
    padding: 4,
  },
  dateText: {
    color: '#1D3D47',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 10,
  },
  networthRectangle: {
    minHeight: 175,
    width: 350,
    backgroundColor: '#1D3D47',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 15,
    marginTop: 0,
    alignSelf: 'center',
  },
  netWorthText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'normal',
  },
  netWorthNumber: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    lineHeight: 30,
  },
  assetsLiabilitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },
  liabilitiesText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
  },

  alNumrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 20,
  },
  alitemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  budgetRectangle: {
    minHeight: 175,
    width: 350,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 15,
    marginTop: 25,
    alignSelf: 'center',
  },
  budgetText: {
    color: '#1D3D47',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'normal',
  },
  budgetNumber: {
    color: '#1D3D47',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    lineHeight: 30,
  },
  moneyLeftText: {
    color: '#1D3D47',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 1,
    marginLeft: 10,
    marginTop: 5,
  },
  progressBar: {
    height: 20,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#1D3D47',
    marginLeft: 0,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  progressText: {
    color: '#1D3D47',
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  expensesText: {
    color: '#1D3D47',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  expensesLine: {
    height: 1,
    backgroundColor: '#1D3D47',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  rentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rentText: {
    color: '#1D3D47',
    fontSize: 18,
    fontWeight: '600',
  },
  rentProgressBar: {
    height: 14,
    width: '60%',
    backgroundColor: '#ddd',
    borderRadius: 7,
    overflow: 'hidden',
  },
  rentProgressFill: {
    height: '100%',
    backgroundColor: '#1D3D47',
    borderRadius: 7,
  },
  rentAmount: {
    color: '#1D3D47',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'right',
  },
  rentLeft: {
    color: '#1D3D47',
    fontSize: 12,
    fontWeight: 'normal',
    marginBottom: 0,
    textAlign: 'right',
  },
});
