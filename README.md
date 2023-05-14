# hackUPC-2023

## Jetson nano configuration to be set up as a server and hotspot.

### Install the required software packages:
sudo apt install hostapd dnsmasq

### Configure the network interfaces by editing the /etc/network/interfaces file:
sudo nano /etc/network/interfaces

Adding the following lines at the bottom of the file:
auto wlan0
iface wlan0 inet static
    address 192.168.4.1
    netmask 255.255.255.0
    wireless-channel 1
    wireless-essid MyHotspot
    wireless-mode ad-hoc
   
### Configure the DHCP and DNS services by editing the /etc/dnsmasq.conf file:
sudo nano /etc/dnsmasq.conf

Adding the following lines at the bottom of the file:
interface=wlan0
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
dhcp-option=option:router,192.168.4.1
domain-needed
bogus-priv

### Configure the hostapd service by editing the /etc/hostapd/hostapd.conf file:
sudo nano /etc/hostapd/hostapd.conf

Adding the following lines at the bottom of the file:
interface=wlan0
ssid=MyHotspot
hw_mode=g
channel=1
auth_algs=1
wpa=2
wpa_passphrase=MyPassword
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP CCMP
rsn_pairwise=CCMP

### Start the services:
sudo systemctl start hostapd
sudo systemctl start dnsmasq

### Configure the firewall to allow traffic:
sudo ufw allow ssh
sudo ufw allow 53
sudo ufw allow 67/udp
sudo ufw allow 68/udp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 5353/udp
sudo ufw enable
