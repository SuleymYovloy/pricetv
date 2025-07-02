// export const caesarCipher = (token: string, shift: number): string => {
//     let result = '';
    
//     for (let i = 0; i < token.length; i++) {
//       let char = token[i];
    
//       // Проверить, является ли символ буквой
//       if (char.match(/[a-z]/i)) {
//         // Получить ASCII-код символа
//         let code = token.charCodeAt(i);
//         console.log("🚀 =====> code:", code)
    
//         // Сдвинуть код на значение сдвига
//         code = code + shift;
    
//         // Если код выходит за пределы «z» или «Z», заверните его обратно в «a» или «A».
//         if ((char >= 'a' && (code as unknown as string) > 'z') || (char >= 'A' && (code as unknown as string) > 'Z')) {
//           code = code - 26;
//         }
    
//         // Преобразую сдвинутый код обратно в символ и добавьте его к результату
//         result += String.fromCharCode(code);
//       } else {
//         // Если символ не является буквой, просто добавляю его к результату
//         result += char;
//       }
//     }
    
//     return result;
//   };

export const caesarCipher = async (token: string, shift: number) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let i = 0; i < token.length; i++) {
      let char = token[i];
  
      // Проверить, является ли символ буквой
      if (char.match(/[a-z]/i)) {
        // Получить индекс символа в алфавите
        let index = alphabet.indexOf(char);
  
        // Сдвинуть индекс на значение сдвига
        index = index + shift;
  
        // Если индекс выходит за пределы алфавита, завернуть его обратно
        if (index >= alphabet.length) {
          index -= alphabet.length;
        } else if (index < 0) {
          index += alphabet.length;
        }
  
        // Добавить сдвинутый символ к результату
        result += alphabet[index];
      } else {
        // Если символ не является буквой, просто добавить его к результату
        result += char;
      }
    }
  
   return result
  };