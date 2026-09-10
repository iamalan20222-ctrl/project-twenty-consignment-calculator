function calculatePayout(salePrice, commissionPercent, optionalFees) {
  const sale = Math.max(0, Number(salePrice) || 0);
  const commission = Math.min(100, Math.max(0, Number(commissionPercent) || 0));
  const fees = Math.max(0, Number(optionalFees) || 0);
  const netSale = Math.max(0, sale - fees);
  const storeEarnings = netSale * commission / 100;
  const consignorEarnings = netSale - storeEarnings;
  return {
    storeEarnings: Number(storeEarnings.toFixed(2)),
    consignorEarnings: Number(consignorEarnings.toFixed(2)),
    effectiveSplit: Number((100 - commission).toFixed(1))
  };
}

if (typeof module !== 'undefined') module.exports = { calculatePayout };

function money(value) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value); }
function updateCalculator() {
  const result = calculatePayout(
    document.querySelector('#sale-price').value,
    document.querySelector('#commission').value,
    document.querySelector('#fees').value
  );
  document.querySelector('#store-earnings').textContent = money(result.storeEarnings);
  document.querySelector('#consignor-earnings').textContent = money(result.consignorEarnings);
  document.querySelector('#effective-split').textContent = `${result.effectiveSplit}% to consignor`;
}
if (typeof document !== 'undefined') {
  document.querySelectorAll('input').forEach(input => input.addEventListener('input', updateCalculator));
  updateCalculator();
}
