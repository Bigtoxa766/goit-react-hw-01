import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {

  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.tableBody}>{type}</td>
              <td className={css.tableBody}>{amount}</td>
              <td className={css.tableBody}>{currency}</td>
            </tr>
          )
        })}
  </tbody>
</table>
  )
}

export default TransactionHistory;
