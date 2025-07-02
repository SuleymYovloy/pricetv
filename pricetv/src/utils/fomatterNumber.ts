

export const FormatterNumber = (num: number, toFixed: number) =>{
    if (isNaN(num)) throw new Error(num + ' is not a Number!');

    const bubu: any = {
      0: '',
      1: 'k.',
      2: 'mln.'
    };

    const thousands: number = Math.floor((('' + num).length - 1) / 3);

    const coef = 1000 ** thousands;

    return (num / coef).toFixed(toFixed) + bubu[thousands];
}