// Булатасов Ильяс БПОи-22-04 Вариант 64
// Метод Ньютона + Половинного деления
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
double function(double y, double x) {
    return 3 * pow(x, 2) * pow(y, 2) - 5 * x - 4 * y + 1 - 5 * cos(y); 
}
double df_dx(double y, double x) {     
    return (5 - 6 * x * pow(y, 2)) / (6 * pow(x, 2) * y - 4 + 5 * sin(y)); 
}
double d2F_dx2(double y, double x) { 
    return 6 * y * (6 * pow(x, 2) * pow(y, 2) - 10 * x - 5 * y * sin(y) + 4 * y) / pow((6 * pow(x, 2) * y + 5 * sin(y) - 4), 2); 
}
double newton_method(double x) {
    double y0 = 0, e = 0.000001, f, y, fh, h = e, y1;
    y = y0;
    for (int i = 1; i < 1000; i++) {
        f = function(y, x);
        fh = function(y + h, x);
        y1 = y - f * h / (fh - f);
        if (abs(y1 - y) < e)
            break;
        else
            y = y1;
    }
    return y;
}
double poldel(double a1, double a2) {
    double e = 0.0000001; double alp, beta, x, d; int s = 1, k; d = e / 3;

    for (k = 1; k < 1000 && s == 1; k++) {
        alp = (a1 + a2) / 2; 
        beta = (a1 + a2) / 2 + d;
        if (newton_method(alp) <= newton_method(beta)) { 
            a2 = beta; 
            x = alp; }
        else { 
            a1 = alp; 
            x = beta; } 
        if (a2 - a1 < e) 
            s = 0;
    }
    return x;
}
int main() {
    setlocale(LC_ALL, "Russian");
    double xmin = poldel(-1, 1);
    double ymin = newton_method(xmin);
    cout << "Булатасов Ильяс БПОи-22-04 Вариант 64" << endl;
    cout << "Метод Ньютона + Половинного деления" << endl;
    cout << fixed << setprecision(8);
    cout << "xmin = " << xmin << endl;
    cout << "ymin = " << ymin << endl;
    cout << "F(xmin, ymin) = " << scientific << setprecision(8) << function(ymin, xmin) << endl;
    cout << "y' = " << scientific << setprecision(8) << df_dx(ymin, xmin) << endl;
    cout << "y'' = " << fixed << setprecision(8) << d2F_dx2(ymin, xmin) << endl << endl;
    return 0;
}
