import copy
import os

os.system('cls' if os.name == 'nt' else 'clear')

def llenarmatriz(n):
    while True:
        try:
            matriz = []
            for i in range(n+1):
                fila=([])
                for j in range(n+2):
                    valor = float(input(f"ingresa los valores de la posicion [[{(i+1)}][{(j+1)}]: "))
                    fila.append(valor)
                matriz.append(fila)
            A = []
            B = []
            for fila in matriz:
                coeficientes = fila[:-1]
                A.append(coeficientes)
                resultado = fila[-1]
                B.append(resultado)
            return A, B
        except ValueError:
            os.system('cls' if os.name == 'nt' else 'clear')
            print("Ingresa numeros")
        

def determinante2x2(matriz):
    determinante = (matriz[0][0])*(matriz[1][1])-(matriz[1][0])*(matriz[0][1])
    return (determinante)

def determinante3x3(matriz):
    parte1 = ((matriz[0][0] * matriz[1][1] * matriz[2][2])+(matriz[1][0] * matriz[2][1] * matriz[0][2])+(matriz[2][0] * matriz[0][1] * matriz[1][2]))
    parte2 = ((matriz[2][0] * matriz[1][1] * matriz[0][2])+(matriz[2][1] * matriz[1][2] * matriz[0][0])+(matriz[2][2] * matriz[1][0] * matriz[0][1]))
    determinante = parte1-parte2
    return (determinante)

var1 = True
print("================SISTEMAS DE ECUACIONES=======================")
while var1:
    print("De que tamaño sera tu matriz??")
    print("(1) 2x2")
    print("(2) 3x3")
    print("(3) Salir")
    n = input(": ")
    if n.isdigit():
        n = int(n)
        if n == 3:
            var1 = False
        elif n == 1:
            os.system('cls' if os.name == 'nt' else 'clear')
            print("hagamos la matriz de 2x2 \n")
            A, B = llenarmatriz(n)
            D = determinante2x2(A)
            if D == 0:
                os.system('cls' if os.name == 'nt' else 'clear')
                print("El sistema no tiene solucion unica")
                continue
            else:
                Ax = copy.deepcopy(A)
                Ax[0][0] = B[0]
                Ax[1][0] = B[1]
                Dx = determinante2x2(Ax)

                Ay = copy.deepcopy(A)
                Ay[0][1] = B[0]
                Ay[1][1] = B[1]
                Dy = determinante2x2(Ay)

            X = Dx/D
            Y = Dy/D  

            print("==============================")
            print(f"El valor de X es: {X}")
            print(f"El valor de Y es: {Y}")
            print("==============================")
            print("Desea continuar? S/N")
            des = input(": ")
            if des == "S" or des == "s":
                os.system('cls' if os.name == 'nt' else 'clear')
                continue
            else:
                break

        elif n == 2:
            os.system('cls' if os.name == 'nt' else 'clear')
            print("hagamos la matriz de 3x3 \n")
            A,B = llenarmatriz(n)
            D = determinante3x3(A)
            if D == 0:
                os.system('cls' if os.name == 'nt' else 'clear')
                print("El sistema no tiene solucion unica")
                continue
            else:
                Ax = copy.deepcopy(A)
                Ax[0][0] = B[0]
                Ax[1][0] = B[1]
                Ax[2][0] = B[2]
                Dx = determinante3x3(Ax)

                Ay = copy.deepcopy(A)
                Ay[0][1] = B[0]
                Ay[1][1] = B[1]
                Ay[2][1] = B[2]
                Dy = determinante3x3(Ay)

                Az = copy.deepcopy(A)
                Az[0][2] = B[0]
                Az[1][2] = B[1]
                Az[2][2] = B[2]
                Dz = determinante3x3(Az)

                X = Dx/D
                Y = Dy/D
                Z = Dz/D

                print("==============================")
                print(f"El valor de X es: {X}")
                print(f"El valor de Y es: {Y}")
                print(f"El valor de Z es: {Z}")
                print("==============================")
                print("Desea continuar? S/N")
                des = input(": ")
                if des == "S" or des == "s":
                    os.system('cls' if os.name == 'nt' else 'clear')
                    continue
                else:
                    break

        else:
            print("Ingresa una opcion valida (1) 2x2  (2) 3x3 (3) Salir")
    else:
        print("Debes introducir una opcion valida")