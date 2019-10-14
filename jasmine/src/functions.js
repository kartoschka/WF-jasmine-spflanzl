function km_and_ltr_to_ltrper100km(km,ltr) {
  return Math.round(100 * 100 * ltr / km) / 100
}

function truncate_string(target_string, by_chrs_num) {
  return target_string.substring(0,target_string.length - by_chrs_num)
}

function highest_value(array) {
  return array.sort(function(a,b){ return b-a })[0]
}

