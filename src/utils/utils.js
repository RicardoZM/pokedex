export function devolverColor(tipo) {
  console.log(tipo);
  let tipoColor;
  switch (tipo) {
    case "normal":
      tipoColor = "bg-[#AAA67F]";
      break;
    case "fighting":
      tipoColor = "bg-[#C12239]";
      break;
    case "flying":
      tipoColor = "bg-[#A891EC]";
      break;
    case "ground":
      tipoColor = "bg-[#DEC16B]";
      break;
    case "poison":
      tipoColor = "bg-[#A43E9E]";
      break;
    case "rock":
      tipoColor = "bg-[#B69E31]";
      break;
    case "bug":
      tipoColor = "bg-[#A7B723]";
      break;
    case "ghost":
      tipoColor = "bg-[#70559B]";
      break;
    case "steel":
      tipoColor = "bg-[#B7B9D0]";
      break;
    case "fire":
      tipoColor = "bg-[#F57D31]";
      break;
    case "water":
      tipoColor = "bg-[#6493EB]";
      break;
    case "grass":
      tipoColor = "bg-[#74CB48]";
      break;
    case "electric":
      tipoColor = "bg-[#F9CF30]";
      break;
    case "psychic":
      tipoColor = "bg-[#FB5584]";
      break;
    case "ice":
      tipoColor = "bg-[#9AD6DF]";
      break;
    case "dragon":
      tipoColor = "bg-[#7037FF]";
      break;
    case "dark":
      tipoColor = "bg-[#75574C]";
      break;
    case "fairy":
      tipoColor = "bg-[#E69EAC]";
      break;
    case "unknown":
      tipoColor = "bg-[#526677]";
      break;
    case "shadow":
      tipoColor = "bg-[#4F507B]";
      break;
    default:
  }
  return tipoColor;
}
