import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [people, setPeople] = useState(1);

  const billNumber = parseFloat(bill) || 0;
  const peopleNumber = parseInt(people) || 1;

  const tipAmount = billNumber * (tipPercent / 100);
  const total = billNumber + tipAmount;
  const perPerson = total / peopleNumber;

  return (
    <div className="flex justify-center pt-12 bg-transparent">
      <div className="bg-white rounded-xl shadow-md p-6 w-80">
        <h1 className="text-xl font-semibold mb-4">Tip calculator</h1>

        <label className="block text-sm text-gray-600 mt-4 mb-1">
          Bill amount ($)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-2 py-2 text-base"
        />

        <label className="block text-sm text-gray-600 mt-4 mb-1">
          Tip percentage
        </label>
        <select
          value={tipPercent}
          onChange={(e) => setTipPercent(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-2 py-2 text-base"
        >
          {[10, 15, 18, 20, 25].map((pct) => (
            <option key={pct} value={pct}>
              {pct}%
            </option>
          ))}
        </select>

        <label className="block text-sm text-gray-600 mt-4 mb-1">
          Split between how many people?
        </label>
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-2 py-2 text-base"
        />

        <div className="mt-6 pt-4 border-t border-gray-100 space-y-1">
          <div className="flex justify-between text-base">
            <span>Tip amount:</span>
            <span className="font-semibold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Total bill:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Per person:</span>
            <span className="font-semibold">${perPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
