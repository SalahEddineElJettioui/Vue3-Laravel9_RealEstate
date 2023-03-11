import { computed, isRef } from 'vue'


export const useMonthlyPayment = (total, InterstRate, Duration) => {
    const MonthlyPayment = computed(() => {
        const Principal = (isRef(total) ? total.value : total);
        const MonthlyInterest = (isRef(InterstRate) ? InterstRate.value : InterstRate) / 100 / 12;
        const NumberOfPayedMonthes = (isRef(Duration) ? Duration.value : Duration) * 12;


        return Principal * MonthlyInterest * (Math.pow(1 + MonthlyInterest, NumberOfPayedMonthes)) / (Math.pow(1 + MonthlyInterest, NumberOfPayedMonthes) - 1);

    })

    const TotalPaid = computed(() =>
        (isRef(Duration) ? Duration.value : Duration) * 12 * MonthlyPayment.value)

    const TotalInterst = computed(() => TotalPaid.value - (isRef(total) ? total.value : total))

    return { MonthlyPayment, TotalPaid, TotalInterst }
}