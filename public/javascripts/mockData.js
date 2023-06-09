var mockData = [
  // ! Item 1
  {
    name: "Sữa tắm Victoria's Secret quyến rũ",
    price: "500.000đ",
    priceSales: "250.000",
    sale: "-7%",
    image:
      "http://mypham9.maugiaodien.com/wp-content/uploads/2020/09/8a6dcb8e287174a7f949119dc28ca2-500x500.jpg",
  },
  // ! Item 2
  {
    name: " Sữa dưỡng thể Hato SPF31 PA+",
    price: "370.000đ ",
    priceSales: "310.000",
    sale: "-5%",
    image:
      "http://mypham9.maugiaodien.com/wp-content/uploads/2020/09/156dc0eb7a087348e1b8c38613020e-500x500.jpg",
  },
  // ! Item 3
  {
    name: "Kem dưỡng da AHA",
    price: "650.000đ ",
    priceSales: "400.000",
    sale: "-10%",
    image:
      "http://mypham9.maugiaodien.com/wp-content/uploads/2020/09/3461949333418s01d20170826t1549-500x500.jpg",
  },
  // ! Item 4
  {
    name: "Dầu dưỡng da Phytoceuticals Argan",
    price: "450.000đ ",
    priceSales: "420.000",
    sale: "-9%",
    image:
      "http://mypham9.maugiaodien.com/wp-content/uploads/2020/09/1274ecabd26e54bcabcb0050da454e-500x500.jpg",
  },
  // ! Item 5
  {
    name: "Kem dưỡng da Differin ",
    price: "200.000đ ",
    priceSales: "150.000",
    sale: "-4%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaYbXqYC4nMh54obtxZj9tyhylOtIpHFoHQ&usqp=CAU",
  },
  // ! Item 6
  {
    name: "Sửa rửa mặt Cetaphil",
    price: "356.000đ ",
    priceSales: "200.000",
    sale: "-15%",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASDxIODxAQEg8OERAQERAQEBAPDxAQFRUXFhURFRUYHCggGBomHRUWITEhJSkrLi4uFyAzODMtOCgtLisBCgoKDg0OGhAQGy0lHSYrLSstLS0rLS0tLS0tLSstLS0tLS0uLS0tLysrLSsrLSsrLS0tLS0tLS0tKy0tLS0tK//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EAD0QAAIBAgQCBgcHBAEFAQAAAAABAgMRBBIhMQVBE1FhcYGRBiIyUqGx0QcUIzNCU2JDcqLBklSCsuHxFf/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBgX/xAA0EQEAAgECAwUFBgcBAAAAAAAAAQIDBBEhMVEFEhNBcRQyM1JhI0KBscHwBhUikaHR4WL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa60pJeqrlgUnxNLdF7rHvEeJp7JeY7p3mz73P3PmO6u4sc+cR3Tdsp42D527ybG6wmRUgAAAAAAAAAAAAAAAAAAAAAAAAAB57FQWZ95thrlhQirrvA9IamxDQGueHg94r5F3lNm0igAAAAAAAAAAAAAAAAAAAAAAAAAxnNJXbSS1bbskhEb8kmYjm8pj+IU1J+srd53U095jk4r6rFH3oYYPiVPNG84rVbu3MW094jkldXimfeh6+Mk9U7p81qjhd0SkKAAAAAAAAAAAAAAAAAAAAAAAAAAAYHxvjPGcR0s/xZe09mepw6fH3I4PGZ9VmnLaO9PNxa2Pqvecn4nRFKxyhomZtzllh+I1o+zUkteTE46zzhYtavuy7fo9xOv8AeKf4ktZxT1311ObU4aeHPDyb9HqMkZ6x3p5vsJ5d7IAAAAAAAAAAAAAAAAAAAAAAAAAACHsCXwzin5su9nsMXuQ8Hl+Lb1c2RsWE0wWdngH59P8Avj80aNT8OfRlpPj19X2w8k9yAAAAAAAAAAAAAAAAAAAAAAAAAABEtgS+G8U/Ml3s9hi9yHgsvxbermyNiwQBZ2OA/nQ/uj80aNR8OWel+PX1fbTyT3IAAAAAAAAAAAAAAAAAAAAAAAAAAES2fcCXw7ii/El3nsMXuQ8Fl+Lb1c2aNpEppoFpdfgf50O9fNHPqPclnpfjQ+2HknugAAAAAAAAAAAAAAAAAAAAAAAAAAMaj0YHn8TwLDTk5Soxbe+sl8E7HTXVZaxtFnLbR4LTvNYVZejeE/6eP/Kf1L7Xm+Zj7Fg+SCPo5hP2I+c/qPa83zHsWD5IXcHwbD05KUKMVJf3S+DdjG2oyWjabM6aXFSd4rDvR2RzulIAAAAAAAAAAAAAAAAAAAAAAAAbAwc+oDB1GVGqUU938QMHRh1vzAKjDrfmBshFLZ/EDcpsKyzkEpgSAAAAAAAAAAAAAAAAAAAAA2BUq1+fIqK068ntoBpcn1gRcbCAAEgZJsIzjVkuYVZpV/MC3CV1cisgAAAAAAAAAAAAAAAAAAA0YqdlbrLCSoVJXYRgFQQYsDm//v4XZ1orlqpLXTTbfVDYbIcZw72qp6N7Ss0ld2dtdBsJp8Zw8pKMaicm0klGb1bSXLraGw6CAkqpi7BF7Cy3XiJIWSKAAAAAAAAAAAAAAAAAACljJet3IsJKmVBklWJBDKPIx4fXzJqhUUc0W49LF6Jaq99nma/7e61Ruw/Dq8Zwk6c5RT2dRO0Xkg73er0zWt73O1wijw2upw9SslCcHfpoXko6Ny607Xto9XvpYPVoxVkFCwkrWEeq8UBeIoAAAAAAAAAAAAAAAAAAOdiH6zKiuVEEGqdaK3aOPNrtPhna9o3XZpljYLrOG/bmmry3n8F2cfHemvD6N1UxELreMWqkvKNzs0+qy6j4eG+3XbaP7zLCb1jnLlT+1Hhqdk677VSaXxd/gfZxaHNaN7Rt6z/rdpvqIryjdYw/2hYKekG2+puMZeTZu/l1+sOO/afc547f4dWh6T0ZfpmvBP5M1W0GSOiY+18NvKYdLC8RpVNITTfU9JeTOe+G9OcO7FqsWX3bLZrb27DvVd6A6RFAAAAAAAAAAAAAAAAAAByqj37zJi1MCljsRa6vZJXbvay7zzfa2uvF/Bxzt1ZxD53xv08SlKlgKTxFSO9RRlKlHtSjrLv0XazZ2b/C2bNtk1Vu5WfL70/6/P6Oe+oiOFeL53xbjmKxDf3itOSu/wAO+SmuzItPPU9vo+yNHpY+ypG/WeM/3lyWyWtzc7I7Xs7Xte2l+q59FggCUr6FHU4bxHE0ZZacppp5ejknJX2y5Xs+4x2iYc+XDS88Y4vZ8I9I1PLGtCVKbtlm01Tnq1o3tqmvDc12pHk4Muntj4xy/wAvpPo5j5VIyhN3lTtaXNxfX5Hx9XhikxMeb7HZ2ptlrNbc4dymzkfSdRGLIAAAAAAAAAAAAAAAAAMZvR9zA5czJiwA+Vfa/wASrKUcPTuqDS6WUXrOfKEv42s+19xu7P7JxePOrvxmeUdPr6/k4c2qibzijyeS4ji61DB4NYac6VCrTnUqVKUnTlUxSqTU4zlGzeWKgknydz7VK1tkt3uf6Md5iI2WcBhI1aNXHY+UJVekpUYrFTrYeDi6eZVJSpQcpNpKzdr2bbZje01tFMfLnw4rWInjZtx1DDQweJoYeHTRqYzCKlLpKicalShUtFXSzZXmSulfNrsY1m83ra3DhO/9zhttDdPgGEksqhSjOjjMHQqQpYmtXnkq1JQnCtJxUFP1X+W9LPsJ414/GJnlty/fmy7kKkcJhalTE06WGlh5YCcZxqOrUm55a8KfR1VLRSlmusttVbUy714rEzO+/wDpjtDr1cNh62OryjRlSq4fimGi6sa1XNVVXEOM29fUd1dONrfEwi16UiJneJrPl0hNotM+rh+lN1DCxu7dBVum272xWI1d932m/B971/SGnJ5fvzfS/sto1lg+kr3vNro83tOil6rfje3ZY+Hqtdiz57Ysc793n6/8dWk08Y979Xt6Zqdjp036q7kYsmQAAAAAAAAAAAAAAAABrrv1X3AcyZkxYkHj/SzhWaUpSjmpVbXurpO1rPyPraPNE17vnDz/AGjgvTL4tfPz6PAVuFYzC5nga0+im8zpPLLXrSkmm+3c7prS/vQww67bhfg88uMYynVqVHWqqrUsqnSetmttmjNNO3LTTkZThpMRGzurk34xLUuMYm9V9NNvE2dVuzc3G+V3ezV3ZqzRfCpw4cl70r1H0qxeeDq1pVKcatKrOnaEVUcJxnq1H2rx9rc1zpse07RxXxJ82nifH8VXbU603T6TpIwbWjTvG7S9Zrk2ZUwUrHCOKWyTKeGVMZVqy6B1p1atSFWbhdt1IyzRqSeytJt3Zp1Oo0+np3s1oiPr+iVi9p/pfRPR30NmowfEKjqqnKVSGGzZqUJyd3KT/U78lpvueL7T/iOcu+PSx3YnhNvOfTp+fo7cWm2434voWEpWV3ztp2GvsjS2x1nJfnP5OqVqG59pi6OHfqoxZNgAAAAAAAAAAAAAAAABpxT9R+BYHOmVixAiUU1ZpNPdPVCJmOSTETG0uTivR+jPWN4P+L08mdVNZkrz4vn5ezMN+XD0cjG+hUKitJwmv5w187nTXtDbnDl/lNqzvS+ziYj7K6UtY1XDuvJeTM/5lHRuro9RHO0T+DTS+yRX9bGPL1RoJS83P/Rqy9p5Nvs6xv8AX/jprpfml2MB9meBp2cs9Zr92Tt/xjZedz4up1HambhGStY/8x+s7y3V0+OHqMHwqnSioU4xhBfphCMF8D5M9jXyW72bJMz++rfG0coXKdCK2XizvwdnYMPGI3nrJu2neiY7lHQwvs+LMZWG4KAAAAAAAAAAAAAAAANGM9nxRYSXOkVEAeercUxHS1IQyWhKS1SWibS1b30OymnxzSLWnm+Xk1eaMtqUiNoalxbFu1oLW39OXPbmbJ02L5mqNdqJ+5+bGrxjFR3jBWtf8OVlfVK+YRpcU8pS3aGevOrKfFMYnZxp81pBuzSTa0l2okafFP3mc63URw7kIjxfFO6tTWW180HG19t5FnS4urCNfnnf+mPxHxXF3tlWl1pTbWm/Mey4uqzr9Rvt3fzFxPGe71f03z/+D2bD1T23U/L/AIljU4viVpJqN9fYS+ZlXS4p5Swv2hnrziIXeBcQq1KrjOd4qDdssVrddS7TRqcFcdYmHXodVkzWmLdHfRyPpL+E9l95JWG8igAAAAAAAAAAAAAAACvjfZXeWElz5FRAHlMWpU6tSp0lOCnUqWztatOUua3STfgz6OO9PDiLPjZsOXxrWpPNr+81G7dPSbVtMyutNOXVJeaMonF0a5pqeqKkqkk6bq0nZxzRTSs7Kyat1JFrbFE7xDG+PUWjaZjZuTxD2nTsuStZaW6ur5k+y6Sy21PWGLw9ZttuDukndJrS9tGt9WZd/Gw8HPM8ZhtUcT78dL8lz8DH7Loz7up+aCFPEL+pHyXW31drEzi6EU1Efea6nD6kneU03sZxmrEbRDXbSZLzvay9wPBuFZttO8JLRdsTm1WSL1h26DTzitMzPk9AjifUXsHs+8krCwRQAAAAAAAAAAAAAAABWx2y7ywkqEioAcXH4KhJXrq6z1GrxclG8rN6bb7myMm0bNNsW877qNTA4CUs0rZmst3Gd8qsrd2kfIvifRPC+rPEcKwc2s0r9HGLypS9l5EvCyiu4eJ9Dwvq2YXCYSjeFOShdq6Sk72Vla/cWMv0ScO/msxnQd7Vb5U5Oyeytf5jxZ6HgR1RUq0I71HyfsvbTXbtHiyeBHVNSrQi2s8m1yUJN/IeLJ4EM89HTWo73/RLlvy7SeLK+BVbw9GKlGSv60Hv25WY2vNmdMcVnguGDYvYPn4ElYWCKAAAAAAAAAAAAAAAAKuO2XiWElRkViBVSrRlKFoTyPNP9MZJ+s90wNX3Kr+/3XpQ0G5smWDq3VqySUUn+HFtvTW/gNxM8JU5VUrX/pxfN2ffayG4xhg6v7y3v+VHbq8hubL7itrK3cQTYCQMJe2u6XziUbALuD5+BJWFkigAAAAAAAAAAAAAAACrjv0+P+iwkqMisQK10dn/AHT/APJgbCAACgQAkCFJXtdX6uZRjL2490vnEDYBcwXPwJKwtEUAAAAAAAAAAAAAAAAVcd+nx/0WElRZWIgrl8RlNRi4OsmpVL9FGM/1fqT8bBFKnVq6fi4r2X7WHgrtXevys/8A2BEMTXeV56+Zwu4/d42bio3S1sm3JWXZIDfRxlSLUpSr1FqpR+7qOu9+zf4PsCrdPisXtTr69dKS5X5kFnBYrpIZ8k4fxqRyy2T28QrTxSs4xjGO83bdp22tdarVrXkrlhJcejTTrVKSioukpyhLpLVKmWSUmoKCypN2zKT5X3Kju4So5KDe+WafK7TSb+BFWgLmC5+BJWFoigAAAAAAAAAAAAAAACrjuXiWElRZWLXF+u1/FfNhWuq1Declmbskk9Xq+QCnNSbUajbW+kdPgBnkl73wRAyS97/FAMkvefkgqcj9+XlH6EGurh23GSm80HdXUbPSzTstrP5FRRo4Gt0yqyyKSjOGfNObjGbjKShF+ym0nr7qWxdx06GHjFJK/qqyvJvTx7huNoFzBc/AkrC0RQAAAAAAAAAAAAAAABoxcLxv1FhJc6SKiLc+YESinuk+8CI04p3SSb5pWIMgAUADYSESAAlIC/hIWV+v5CVhvIoAAAAAAAAAAAAAAAAAVquET1i7eF0E2VpYOryyPxa/0Bg8NV9xPukgbI6Cr+3/AJR+o3NkdFU/bfnH6jcOiqftPzj9RuCo1P235x+o3E9BV/b/AMo/Ubh0FX3P8ojc2SsPW92K75fQbmzZHBVOcoruTf0Bss0sKlu3J+S8gqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
  },
  // ! Item 7
  {
    name: "Sửa rửa mặt Simple",
    price: "100.000đ ",
    priceSales: "86.000",
    sale: "-2%",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVEhIVFBISERQSFRUYEhIREhISEhESHBUaGhoYGBkdIy4lHB8sIxgYJzgmKy8xNkM6GjE7QDszPy40NTQBDAwMEA8QHxISHzYsISs0NTQ2MTQxNDQ2NDY0NTQxNDQ/ND00MTQ0ODQ0NDQ0NDQ0NDQ0NDY0NjQxNDQxNDg0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAEEQAAIBAgMEBwQJAgMJAAAAAAECAAMRBBIhBTFRYRMUIkFScZEGMoHBI0JTkqGisdHwYuElM3IVJGN0o7LC0vH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJhEBAQACAAUEAgMBAAAAAAAAAAECEQMSITFRE0FhkSJxBAWBMv/aAAwDAQACEQMRAD8A+zREQEREBERAxOTV0G9lHxE6ylr0CXbzMz4mdxnRFulr1hPEvqI6wniX1EpjhWmOrNMfXvhXmq66wniX7wjrCeJfvCUhw7TU0THr3wc1XvWE8S+omOsJ4l9RKPojHRGR6+Xg5qvOsp4l9RHWU8S+olF0RmOiP8Eevl4Oar7rKeJfvCOsp4l+8JQ9Cf4JnqzfwR6+Xg5qvesp41+8I61T8a/eEouqN/LzHVG/l5Pr3wc1X3Wk8a/eE7TzTYRh3iekXcJpwuJc97i0u20RE2SREQEREBERAREQEREBERAwZX1bhjyP4HWWEgYvR14MLeh/vMeNPxRXn9q7TqdKtJGyaoGYAFrsRuv5zWqtUK56xUfKtx0ZtfVxrZTb3Be9tSdZYYvYtJ3LsWu1tzWGgt8pzXYOH4E+btPOuGfNb9dWOrtWYtmRCwxFV9coUPY69pSd+mW1+ekt9lZjRQuSWIJJYkkgsSPwtM09i4cEEU1NuLMw9CbSf0fMfhL8PCy7v0mS7cSsxlnfojNK9BijhTZirZSDqDbTWa2xbVc8s4YrEU6a5na3Abyx4ASFsbHuzGnU98Xsx0JtvB5j5SAtCpiqxaxyA79bKoO4cz85hlxpZOXvVbenR6NDcA8QDNp06I+UxknR0W1Wk1JnXJzE51E5xbDTmrZmVe4sL+su5T4Kn9IOVz+EuJvwe1q8ZiIm6SIiAiIgIiICIiAiIgIiIGJX7VHZU8Db1H9pYSHtNb0zysZTiTeNReyKpuokfHVmSlUdRmamjsq8SqkgfhO2Ea4tNnE5fbbO9nktgbOw2KoJVqO9bENrUqdLUWpTe+5QpGQDu0tLDHqUrYBOuVEsSuQoznFFQt87DQG2+/iuNZB217LUgKmIw7thaqKz3psVpmwzEW+re3dpyMiJjnrnYtR/ed6+Y2tmKkLmtzy3+Mnu598s1Z18+XoKvtLhVLrnqO1NmWoqUarFCpsS1l0XTfumH9qcIuU9KzKct6i03amhYaB3Asp1Gh14yH7Lf5u0+eKf4+9+8rsMv+BP/oqH/rGNRbny+O21/j9oYSniEFRgtYqWUKjtnUhl+qCGJsQBv0nbAbZo1H6JC9N1FxSqU3ouU4qrAXHlKEj/ABXA/wDJD/tqyX7VD6fZpX/N6yoW3vdFp0nwta8iYYzsc963xW3slWduu53ZsuLqgZ2LZVFtBfcJIb2kw1iwNRqanK1daNRqAN7e+Ba3MaTzis4wW2Ml79Zqg235Cyh/y3lpstcYcJRVEwJpNRUKGevdkK/WAW1zc35ybEY53Uk8LzDYkupYrYfUINwynUEHv8+cw7SHsPB1KGGp0qjK7U8wuhYrlzEqBcA6AgfCSnMpe7XG2ybTdji7OeAA9T/aXEq9ir2XPFreg/vLOdfCmsY2x7MxETRJERAREQEREBERAREQEREDE4Yxbo3l+ms7zSqLqw4g/pIym4KXBtrO2Nw6ujowJV1KsASpsRY2I1Ei0DZpYtunHOzL2eab2czDI+Mxj0u+m1RbMPCzBcxHxk+tsemz4VhemMIT0aJYJYgCxuL2sok9hOVSm51R8jcGXOh81uD6ERtXlk9nDZ2y0otXZWdusVGqMGy2Vje4Ww3a98409hU1wZwmeoUKsuc5c9mfNwt38Ju+LxKe9hhVHiw9VCx5lHy28gxnFvaBF9/D4xDzw1Rh6rcGEfjFLtPCZtqYWmKlSmRhbK6MFcFTVsd1u7UWtL7A7FRKnTPUqYisFKrUrFewp3hFUALfjaRjt2gzBxhsU7gWVhg6hcDXQMRpvPrJKbQrv7mEdB4sTUSkPupnb8BCsmMtvfrtrhdh06dSu6tUK4gsalFmBpFmvmOW1ze53nv8pGpbAFMFKWJxNKkST0SOhVb7wrMpZR5GWtNKm96gJ8NNSiD1JJ9bcps5kWrzHHw4UqSoqooIVRYXJY/EnUnmZrUM6GcaplErnZK2pDmSfl8pOkfBLamo5frrJE78ZrGNZ2ZiIlkkREBERAREQEREBERAREQExMxA864s55H5yyG6QcYLO3mZMom6zjnTKxn7ubiV67Von3WZ9SOxTquSV96wVTe1rG27QHeJYYh1RWZiFVQSxO4AakynOzQyUmVhmQVLZ6bhSrsHIKBlYEFV7+OmukWKZW+zcbap9I4JtTVUs+SqQ7OAVysFy2NxbW5J5SQNqUe9mUWJzOlRFBVc7KWKgZgASV3ix00M4Ls5VyjMAC9EqFSy3pi9gL6XsfLnObbOVHvmp5XqOyB6bO/SOHYi+bKRcud27S8jojdSam1UDIMtTK61DrRrdJmXJoKeXMRZyb27oO1aWhz5lfL0eRKjs+ZC+gVfCCdOHdOeA2aUdXLg5Q4CIrKiB+j0QMzZR9He17XbummF2ZkNM583R5fq2vakafHTfeNw3XR9rUbA52IK5yRTqNkS5F3svY1DDtW908DJAcMARqGAIO64IuJS4zCvTDqhf6YMhYGkEzu7st8xzLbPa4DadwMuETKqr4VA9BaVqZb7hnB987Gc0F2A4mIs9HRWyqOAH6TpMTM9BqREQEREBERAREQEREBERAREQERECl2kvbPO36TrhT2Y2qvaB5fMyPTdwoyKGN9b9wt+9px53lyrO92NtUc9CqoBYlDYLe5O8WtKXFU6wqHog6MHZVutdlydEwRmqM2QqTlNgLg87mXrPW8C7+Nxb11/m+cWerY9hSbDLY2udN+um8+kpc54v0plNqoXAQ0aeJLq13Woaqh2FGrYEubElioLDTUamwnLB06nSppUKB6La061NVfLWDm1RmbvS50GolsKta5vTAFmtqNdDbv42E16avr9Gu/SxG6x58bfjKepPF+kaRMelbpGCdJkste4JsaiDKaPINZDbk0h4ha1lOWoHsrrZK7nOzl2TMrBFyghbMDcDvGkuGqVtbIpHdfQ210Op5a84qVKt7KgIF9TaxHcR2v5y3xz/BYqOgZmZMtRlNVGaoRXpsB0hOU3Nm0+ulhYW00ljgKZQVF7WVajdHmLN2CqnQnUi5a3p3TLVq/2a9/fy07/AD0/GHq1rC1ME63FwLai3fwv6SOf4v0mTSS0xg1u6/6h+s4UnqHNnUKPqkHf566SZswXdfj+k04f5WLTuvoiJ3tSIiAiIgIiICIiAiIgIiICIiAiIged9qcS6CmVt2swNxfda36mUOD2tWue3+VP2noPa5L0kPBreoP7Tx+GPang/wA7PPHjWS3XRhnbzLxtp1vH+VP2kd9qVvtPyp+05zjUE5PW4nm/au66nalf7T8iftOxxdZffrpTPhyB3HmFXs+RIMjK2RMw0d8wU96KNGYcydAeR5TscC66FKZyqxY3vcqyg/VuP01Os1xyzvvb/qZtt1uq2iYhHPchQU2PlmWx8ryK21MQCQXII0IKICDwItN6eHLA/RKgyghnJF1PZB0B1uP5eRy3SISdXpAHN3vTuBY8SpK25HlIyyy13v2On+1q/wBp+VP2j/atb7T8qftIMzMvVz837RupbbUreP8AKn7S89lcW71GDEEKpO6xvcD5meVeeq9jE1qngFHrc/KdP8TPPLjSW1bC3metiIn0LciIgIiICIiAiIgIiICIiAiIgIiIFP7TLfDsfCyn81vnPC0j259C20mbD1R/Tf0N/lPnm554f9lNcWX4Y8TutF3TjUE60zpNKk85m44hbhbDTIN1t9zfd89Z2faVQsGKLcFiDlfRiQSRc8hpu5TfD4hgLAuct7ItR0DA8LHeD3Aa5jwmaWMdzlRajNctpiKvu5r238NJvj8XW/haI+GxjggMSynKhL5zkTNe4sQfxklmK/QlR9HTqmoyiwzmm1xfv+oL8Vma1Ssua9OqpJCr/vNQlWIAGl9dfhc2muITEuCFp1VUhgymo9UGx3do9xHdL9ZNdbf0lUxOtbDuls6lb33kbxbTTdvB+I4zlOWyy6qjV57T2OT6J24sB6KD/wCU8Wd4nvfZdLYcHxMx+Xynd/XY7436jTD/AKXURE99sREQEREBERAREQEREBERAREQERECPjEzU3XxIw9QZ80qe9PqJnzHGLlcjgSPQ2nj/wBpOuN/bLieybROky4nPDNpJ2HNLK+ffYZL5suaze9buvl/l55eGPNddv2zisf0tNqNdc4L5suVg3R9lnuLC+oGmnpLRmwenG4v7+UrnGa/fcKD68bSvepQFRuyrLk7+ly9KFJGXUHKWsNeM2vDuOusTrTt1+kfeNc9oMO019ALG+f3ufoBpaFWxb5ny1KmUk2uzXy30B1nes2GvSy2tnXOL1AcmVbhyb9q+b3e6d2ODvvH+YL6VQOjumYDW9/e14A7riWvNl03OiVbVrO9s7M1r2zEm1985GWGIfDBFyLmbshgxcA9gXIP+q+nLhaVzMJhnLL3lVrC7xPo2wlth6XNb+pJ+c+c0z2p9N2elqVMcEUflE9H+sn52/C/D7pURE9psREQEREBERAREQEREBERAREQEREDEocagDtoN57ucvpTbSXtn4fpMeNPxVy7M4atTuEJGYi4Ft4khq1O7LdboMzDwrxPofSea2vs13NPE0jathzcAmwqJftJfnu+POdtlbGYUsRUrk9Ji1bpMpuUQgjIDrrY2/8AkzwkuLHmy5uWT/VjU2phgmcumTvORiRqRqLXG47x3TNDF0al8pVsrZW7JBV8oexBAsbESvfCUwGRaborujlVVbdhla17XIJQXBPeeM22Rg1pK2Q1CalUuxq2zNUNLtNuG8i55kyMsYmW7S+tYf7Sjru7aa7v/Yesy+IoglS9MMDYglAQbX1HlrKOjgqgKBsJTy2UPldiApUAhQX1IzP3aa+K82XCMysXwYDlMutRmRiqJlUkPqtw+n9CnfKcsOarnrVD7Slp/UnC/wCkyuIovor03OuilSdN+6U+Gw1Tsq2DpImuYlgxQNpc9q7dnu8wCRvdWr0yrJh6QOU5jnf62QsApa29n0/4d76gSeWG74WaIC+4egnpJ5vZZdihdQrkjMo3DXzM9JNuDOla4dmYiJusREQEREBERAREQEREBERAREQEREDEqtqDteYEtZXbVX3T5zPiT8UXsqw5uBlqWGt0UMD3WP4ywo1SoIK1WvY+4LDQbv5vkFaeYFdNbWzDMLgg7ri+6SkwHZ3pqBf6Nrb77s3AD9Zhw+zOb9nHEKxZiOnUXNwqIRv3qSOF9P4ctUDAdhl7TAqwykno20/GdVwJDKSaZCm4ARgb+ec99u6ZrJe3Im/llYfOTkaqrFGwH0FQWLaCpe2vdru+VvIFwwylehexIWzVG3AjUEbtRe/9PGSFwCDc1QaW986DlwmTgFNu3UsBbSoddb3vvvKK6cBRB1OHqahr3fU6AWax9J1SgoAfIyN2hZnLbzvOus6jApa2apaxHvkb73PnqZyrYVFYuM17k6sSBflF7J0k7NF3X4/pLyU+yF7RPAGXE6OFPxaY9mYiJqsREQEREBERAREQEREBERAREQEREDEhbTHZB5/KTZGx63Q8rGVym8ai9lNQPalvTOkpwCDLSgdJy8Pupi0x1MshAve67jY6MCbHyvKjq9UK9r02IFiGTUZhlFtQCFBB7rtpL1pFeWyMptUPQrEKCWslbO1+jbpaVmAXfvByHUD3ZMwdLKH97tuWCtlsmgFlC6AG17a6sZ2gGURI6yHiWkq+kiYjfFTU/Y6+8eQlpIGyUshPE/L+8nzqwn4xedmYiJdJERAREQEREBERAREQEREBERAREQE1fcfIzaatuMCvfDL/AAzKURxI9P2nVpssrcYjTi1L+pvUTi9P+Gdq762EjMspcZ4RoyCYyxaZXfI5fg0xrMrRB3zqVmyCXmETpNorZQBOs0pbhN5dJERAREQEREBERAREQEREBERAREQEREBMGZiBDLTZTJBUHeAZqaS8BA4PTB75zNLnJXQLw/EzHQLwPqZGhF6IcZgoB3yX1deB9THV14fiY0IlucwDJooJ4RNlQDcAPhJCnuE3iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z",
  },

  // ! Item 8
  {
    name: "Collagen",
    price: "500.000đ ",
    priceSales: "399.000",
    sale: "-6%",
    image:
      "data:image/jpeg;base64,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RAEREAREQBERAEREAREQBERARzbKurE2yqyEAWTlHfY/ahT6RV2StJoSam6Ft1q75a7J17NfOjQkHVmlGjeiAsIoDK3tecrJWYnKALFjUiuY9q8dO0by7b+j3gch3kBAeY3CNlDQSWljmyMc0i2ubYBF2DoSNbFEr04bc5yZMpa15DeyDRNAabgH1BDOz54fajQzN1HWatux2b0FnSvFSC6ziCrPBiMxyu0ORvaLcpaB2jQFh1l22lBRPgxR1DzdHLZj0PZNuAFE5mmvBytPx0Yvzp0JaezeooEaDvIH1kDfRfUeLjIzCbs2BZyga91jXn7D3IXVe4lw7XBtOdmOZ9E5brMcl0ALy0rsQVON4Oz81aGi00fVzVyJUxJUREIEREAREQBERAEREAREQBERAEREAREQEcuypysBBBFg7i/9ldl2VKZ5a0kNzEbAEC/WUKRMgaNoyKIOhby9fifaUOGYTmMRvvtvvVEcfboMht2VrRmFlziABX9GzV94IqwrXwm0NYS1wDxITQvL1fpA1vqCoCbqW2T1Zt3pat138fE+1fLMMwAgRaHfVuut96qP45HTiA4hjC4GjRI6y23sDcTh4qT4ZivK23HNkNNOnpWfEAsI/wB0BYMDarqib1OrdT3nXfU+1eNw7QSRGQSC0m22Qd+a+8JimytzMNtN8u5MWTl0eGXpZI53381QQuwUZJJiNkk+kNybJHa0N6+oIMLGBl6nskk12K19fgojI8XeIZ2fSoNsAXdDv2/1vNDim0M0jC7S6c3moXWe8+8LCGNDWtIAvcg7m97KvxKnHK13okEeBVyJUNySoiIYhERAEREAREQBERAEREAREQBERAEREBq/TvpY3hkUUz4XSxyzNhdkIDm2x7g4B2jtWVRI33WtSeVvg7hle+UXVtdh3fXyvW+7uW4dNejrOIYSTDOdkLsro31eR7DbXVzHI+BK/OvGPJfxeKQj+BulF6Phc17XeI/KHrAQp1QeVHgX9J+1fyeTvu/rsDXfRev8qvAy0NLnlrbDR/B36WKK4z8nfF/o6f7CfJ3xf6On+wgOxnyn8C73n0gf+HfrmzXff6b/ALR719fKpwPXV+pDv5O/eyb9rne096438nfF/o6f7C8+Tvi/0dP9hAdph8rfBmCmvlAuz/w79T3nv2HsXsnlf4M4UXykdxw7lxX5O+L/AEdP9hPk74v9HT/YQHZvlY4J/Sk5/wDLu5m158rPBe+T/tiuNfJ3xf6On+wnyd8X+jp/sIDtDPK/wgGmum1N6Yc6n2rLdDvKFFxHFyYeCCRsUMLpHSyFoJdnY1rQxpOhDnGyeWy4TgfJtxhzwBw+UG935GAfWXEBd28l/QU8MjkfK9r8ViSzrMl5WNbeVjSdzZJJ05d1kDekREIEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB/9k=",
  },

  // ! Item 8
  {
    name: "Derma E Vitamin C",
    price: "452.000đ ",
    priceSales: "310.000",
    sale: "-4%",
    image:
      "https://cdn.shopify.com/s/files/1/1525/1400/products/10365_Deluxecopy.jpg?v=1637081930",
  },

  // ! Item 8
  {
    name: "Sửa rửa mặt Hada Labo",
    price: "215.000đ ",
    priceSales: "99.000",
    sale: "-3%",
    image:
      "data:image/jpeg;base64,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",
  },

  // ! Item 9
  {
    name: "Kem trị mụn trắng da Zoley",
    price: "310.000đ ",
    priceSales: "125.000",
    sale: "-14%",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/b8/b4/2f/71f216232399dfa280e90a38d1be7d63.png.webp",
  },

  // ! Item 9
  {
    name: "Kem ngừa mụn Yoosun",
    price: "151.000đ ",
    priceSales: "76.000",
    sale: "-9%",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/81/5e/8b/8f3ce2893477bdf7744041c79be1e7f1.jpg.webp",
  },

  // ! Item 9
  {
    name: "Serum mụn thâm mờ sẹo",
    price: "200.000đ ",
    priceSales: "69.000",
    sale: "-13%",
    image:
      "https://salt.tikicdn.com/cache/280x280/ts/product/21/35/4b/970a6f6dcfd327c83387acd0072874bd.jpg.webp",
  },
];

var products = document.querySelector(".products");

mockData.forEach((item) => {
  var newProduct = document.createElement("div");
  newProduct.classList.add("content__home-products-item");
  newProduct.innerHTML = `
        <a href="" class="content__home-products-link">
          <div class="content__home-circle-sale">${item.sale}</div>
          <img
            src="${item.image}"
            alt=""
            class="content__home-products-img"
          />
          <h3 class="content__home-products-title">
            ${item.name}
          </h3>
          <div class="content__home-products-price">
            <h4 class="content__home-products-price-cost">${item.price}</h4>
            <h4 class="content__home-products-price-sale">${item.priceSales}</h4>
            <sup>đ</sup>
          </div>
        </a>
        <button class="content__home-products-btn">
          Thêm vào giỏ hàng
        </button>
        `;

  products.appendChild(newProduct);
});

var searchInput = document.querySelector(".modal-second-input");

searchInput.oninput = function (e) {
  let txtSearch = e.target.value.trim();
  let listProduct = document.querySelectorAll(".content__home-products-item");
  listProduct.forEach(function (el) {
    if (el.innerText.includes(txtSearch)) {
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });
};
