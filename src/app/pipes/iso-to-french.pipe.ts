import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isoToFrench'
})
export class IsoToFrenchPipe implements PipeTransform {

  transform(value: string) {
    switch (value) {
      case "US" : return "États-Unis"
      case "ES" : return "Espagne"
      case "DE" : return "Allemagne"
      case "CH" : return "Suisse"
      case "GB" : return "Royaume-Uni"
      case "CN" : return "Chine"
      case "JP" : return "Japon"
      case "AU" : return "Australie"
      case "IT" : return "Italie"
      case "KR" : return "Corée"
      case "CA" : return "Canada"
      case "MX" : return "Mexique"
      case "IE" : return "Irlande"
      case "CZ" : return "République Tchèque"
      case "IN" : return "Inde"
      case "VN" : return "Vietnam"
      case "HR" : return "Croatie"
      case "FR" : return "France"
      case "HU" : return "Hongrie"
      case "SE" : return "Suède"
      case "TR" : return "Turquie"
      case "GR" : return "Grèce"
      case "DK" : return "Danemark"
      default : return value
    }
  }

}
