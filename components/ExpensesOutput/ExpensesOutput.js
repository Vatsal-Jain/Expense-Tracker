import { StyleSheet, View, Text } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
	let content = <Text style={styles.infoText}>{fallbackText}</Text>;

	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}

	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			{content}
		</View>
	);
};

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	infoText: {
		color: GlobalStyles.colors.gray500,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 32,
	},
});